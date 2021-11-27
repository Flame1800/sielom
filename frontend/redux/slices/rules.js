import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../libs/API";

export const fetchCreateRule = createAsyncThunk(
  "rules/fetchCreatePost",
  async (data) => {
    const response = await API.createRule(data);
    return response.data;
  }
);

const rulesSlice = createSlice({
  name: "rules",
  initialState: {
    entities: [],
    defaultItems: [],
    loading: "idle",
    error: null,
    filter: {
      searchResults: [],
      role: null,
      task: null,
    },
  },
  reducers: {
    setRules(state, action) {
      state.entities = action.payload;
      state.defaultItems = action.payload;
    },
    clearRules(state, action) {
      state.entities = state.defaultItems;
    },
    filterRulesByRole(state, action) {
      const role = action.payload.name;
      state.entities = state.defaultItems.filter(
        (rule) => rule.roles.map((i) => i.name).indexOf(role) !== -1
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

export const { setRules, searchRules, filterRulesByRole, clearRules } =
  rulesSlice.actions;
export const ruleReducer = rulesSlice.reducer;
