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
      const needed = action.payload.id;
      state.entities = state.defaultItems.filter(
        (rule) => rule.roles.filter(role => role.id === needed).length > 0
      );

      return state;
    },
    filterRulesByTask(state, action) {
      const needed = action.payload.id;
      state.entities = state.entities.filter(
          (rule) => rule.roles.filter(role => role.id === needed).length > 0
      );

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

export const { setRules, searchRules, filterRulesByRole, clearFilterRules } =
  rulesSlice.actions;
export const ruleReducer = rulesSlice.reducer;
