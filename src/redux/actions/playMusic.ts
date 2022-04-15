const playMusic = (str: string, playPause: any, volume: any ,mute: any, timeCurrent: any) => {
    return {
      playPause,
      mute,
      volume,
      timeCurrent,
      type: str
    };
};
  
export { playMusic };
  
  