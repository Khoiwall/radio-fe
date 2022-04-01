const listen = (str: string, track: any) => {
    return {
      type: str,
      payload: track
    };
};
  
export { listen };
  
  