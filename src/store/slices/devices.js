import { createSlice } from "@reduxjs/toolkit";

const devicesSlice = createSlice({
  name: "devices",
  initialState: {
    devices: [],
  },
  reducers: {
    addDevice: (state, action) => {
      state.devices.push(action.payload);
    },
    removeDevice: (state, action) => {
      state.devices = state.devices.filter(
        (item) => item.id !== action.payload,
      );
    },
    updateDevice: (state, action) => {
      const { index } = action.payload;
      state.devices[index] = { ...action.payload };
    },
    importDevices: (state, action) => {
      const devices = action.payload;
      state.devices = devices;
    },
    deleteAll: (state) => {
      state.devices = [];
    },
  },
});

export const {
  addDevice,
  removeDevice,
  updateDevice,
  importDevices,
  deleteAll,
} = devicesSlice.actions;
export default devicesSlice.reducer;
