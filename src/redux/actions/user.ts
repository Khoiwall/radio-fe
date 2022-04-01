const userAction = (str: string, user: any) => {
    return {
      type: str,
      payload: user
    };
};
  
export { userAction };
  
  