const updateMainInfo = (field, value) => {
  if (value) {
    const obj = {};
    obj[field] = value;
    return {
      type: "MAIN_INFO",
      payload: obj
    };
  } else {
    return {
      type: "MAIN_INFO",
      payload: {
        delete: field
      }
    };
  }
};

const updateOriginInfo = (field, value) => {
  if (value) {
    const obj = {};
    obj[field] = value;
    return {
      type: "ORIGIN_INFO",
      payload: obj
    };
  } else {
    return {
      type: "ORIGIN_INFO",
      payload: {
        delete: field
      }
    };
  }
};

const updateStudiesInfo = (field, value) => {
  if (value) {
    const obj = {};
    obj[field] = value;
    return {
      type: "STUDIES_INFO",
      payload: obj
    };
  } else {
    return {
      type: "STUDIES_INFO",
      payload: {
        delete: field
      }
    };
  }
};

const addJob = job => {
  return {
    type: "ADD_JOB",
    payload: job
  };
};

const deleteJob = idx => {
  return {
    type: "DELETE_JOB",
    payload: idx
  };
};

const addActivity = value => {
  return {
    type: "ADD_ACTIVITY",
    payload: value
  };
};

const deleteActivity = idx => {
  return {
    type: "DELETE_ACTIVITY",
    payload: idx
  };
};

const addPreference = (category, title) => {
  return {
    type: "ADD_PREFERENCE",
    payload: { category, title }
  }
}

const deletePreference = (category, idx) => {
  return {
    type: "DELETE_PREFERENCE",
    payload: { category, idx }
  }
}

const clearAll = () => {
  return {
    type: "CLEAR_ALL"
  }
}

export {
  updateMainInfo,
  updateOriginInfo,
  updateStudiesInfo,
  addJob,
  deleteJob,
  addActivity,
  deleteActivity,
  addPreference,
  deletePreference,
  clearAll
};
