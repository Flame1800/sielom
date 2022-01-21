import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API} from "../../libs/API";

export const fetchCreateRule = createAsyncThunk('posts/fetchPosts', async (post) => {
  const response = await API.createRule(post)
  return response.data
})

const rulesSlice = createSlice({
  name: "rules",
  initialState: {
    entities: [],
    defaultItems: [],
    loading: "idle",
    error: null,
    filter: {
      searchString: [],
      role: null,
      task: null,
    },
  },
  reducers: {
    setRules(state, action) {
      state.entities = action.payload;
      state.defaultItems = action.payload;
    },
    clearFilterRules(state, action) {
      state.entities = state.defaultItems;
    },
    filterRulesByRole(state, action) {
      const neededRole = action.payload;
      if (neededRole.id === 'all') {
        state.entities = state.defaultItems
        state.filter.role = null
        return state
      }

      state.entities = state.defaultItems
          .filter((rule) => rule.attributes.roles.data.filter(role => role.id === neededRole.id).length > 0)
      state.filter.role = neededRole

      return state;
    },
    filterRulesByTask(state, action) {
      const neededTask = action.payload;
      const neededRole = state.filter.role;

      if (neededTask.id === 'all') {
        state.entities = state.defaultItems
            .filter((rule) => rule.attributes.roles.data.filter(role => role.id === neededRole.id).length > 0)
        state.filter.task = null
        return state
      }


      state.entities = state.defaultItems.filter((rule) => {
          const hasRole = rule.attributes.roles.data.filter(r => r.id === neededRole.id).length > 0
          const hasTask = rule.attributes.tasks.data.filter(t => t.id === neededTask.id).length > 0

          return !!(hasRole && hasTask)
      })

      state.filter.task = neededTask

      return state;
    },
    searchRules(state, action) {
      const searchValue = action.payload;
      const searchVal = searchValue.toLowerCase();

      const results = state.entities.filter((card) => {
        const textBody = card.body.blocks.filter(
          (b) => b.type === "paragraph"
        )[0];
        const title = card.title.toLowerCase();
        const paragraph = textBody.data.text.toLowerCase();

        if (
          title.indexOf(searchVal) !== -1 ||
          paragraph.indexOf(searchVal) !== -1
        ) {
          return card;
        }
      });

      state.entities = results;
      state.filter.searchResults = results;

      return state;
    },
  },
});

export const { setRules, searchRules, filterRulesByRole, filterRulesByTask, clearFilterRules } =
  rulesSlice.actions;
export const ruleReducer = rulesSlice.reducer;
