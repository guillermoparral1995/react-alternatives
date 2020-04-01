const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "MAIN_INFO": {
      if (payload.delete) {
        const obj = { ...state };
        delete obj[payload.delete];
        return { ...obj };
      }
      return {
        ...state,
        ...payload
      };
    }

    case "ORIGIN_INFO": {
      if (payload.delete) {
        const obj = { ...state };
        delete obj.origin[payload.delete];
        if(!Object.keys(obj.origin).length){
          delete obj.origin;
        }
        return { ...obj };
      }
      return {
        ...state,
        origin: {
          ...state.origin,
          ...payload
        }
      };
    }

    case "STUDIES_INFO": {
      if (payload.delete) {
        const obj = { ...state };
        delete obj.studies[payload.delete];
        if(!Object.keys(obj.studies).length){
          delete obj.studies;
        }
        return { ...obj };
      }
      return {
        ...state,
        studies: {
          ...state.studies,
          ...payload
        }
      };
    }

    case "ADD_JOB": {
      const jobsList = state.work ? [...state.work, payload] : [payload];
      return {
        ...state,
        work: [...jobsList]
      };
    }

    case "DELETE_JOB": {
      const jobList = [...state.work]; // copy the array;
      jobList.splice(payload, 1);
      if (jobList.length) {
        return {
          ...state,
          work: [...jobList]
        };
      }
      const obj = { ...state };
      delete obj.work;
      return { ...obj };
    }

    case "ADD_ACTIVITY": {
      const activities =
        state.hobbies && state.hobbies.activities
          ? [...state.hobbies.activities, payload]
          : [payload];
      const hobbies = state.hobbies
        ? {
            ...state.hobbies,
            activities
          }
        : { activities };
      return {
        ...state,
        hobbies
      };
    }

    case "DELETE_ACTIVITY": {
      const activities = [...state.hobbies.activities];
      activities.splice(payload, 1);
      if (activities.length) {
        return {
          ...state,
          hobbies: {
            ...state.hobbies,
            activities: [...activities]
          }
        };
      }
      const obj = { ...state };
      delete obj.hobbies.activities;
      if (!Object.keys(obj.hobbies).length) {
        delete obj.hobbies;
      }
      return { ...obj };
    }

    case "ADD_PREFERENCE": {
      const { category, title } = payload;
      const modifiedCategory =
        state.hobbies &&
        state.hobbies.preferences &&
        state.hobbies.preferences[category]
          ? [...state.hobbies.preferences[category], title]
          : [title];
      const modifiedPreferences =
        state.hobbies && state.hobbies.preferences
          ? {
              ...state.hobbies.preferences
            }
          : {};
      modifiedPreferences[category] = modifiedCategory;
      const modifiedHobbies = state.hobbies
        ? {
            ...state.hobbies,
            preferences: modifiedPreferences
          }
        : { preferences: modifiedPreferences };

      return {
        ...state,
        hobbies: modifiedHobbies
      };
    }

    case "DELETE_PREFERENCE": {
      const { category, idx } = payload;
      const obj = { ...state };
      obj.hobbies.preferences[category].splice(idx, 1);
      if(!obj.hobbies.preferences[category].length) {
        delete obj.hobbies.preferences[category];
        if(!Object.keys(obj.hobbies.preferences).length){
          delete obj.hobbies.preferences;
          if(!Object.keys(obj.hobbies).length){
            delete obj.hobbies;
          }
        }
      }
      return { ...obj };
    }

    case "CLEAR_ALL": {
      return {
        contacts: []
      }
    }
  }
};

export default reducer;
