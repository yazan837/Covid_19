import camelCase from 'lodash/camelCase';

export const createAction = (type: any, ...props: any) => {
  const actionCreatorName = camelCase(type);

  const actionCreator = (data: any = {}) => {
    const action: any = {type};
    props.forEach((property: string) => {
      if (data.hasOwnProperty(property)) {
        action[property] = data[property];
      } else {
        action[property] = null;
      }
    });
    return action;
  };

  return {[type]: type, [actionCreatorName]: actionCreator};
};
