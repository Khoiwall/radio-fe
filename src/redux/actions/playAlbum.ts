const album = (str: string, listTrack: any) => {
    return {
      type: str,
      payload: listTrack
    };
};
  
export { album };
  
  