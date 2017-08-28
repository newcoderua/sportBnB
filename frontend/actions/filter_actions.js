export const UPDATE_FILTER = "UPDATE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
