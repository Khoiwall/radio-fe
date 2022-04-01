function formatTimer(seconds: number){
    const secondsTmp = Math.floor(seconds)
    let minutes: number = Math.floor(secondsTmp / 60);
    seconds = secondsTmp % 60;
  
    let output = minutes >= 10 ? `${minutes}` : `0${minutes}`;
    output += seconds >= 10 ? `:${seconds}` : `:0${seconds}`;
  
    return output;
};

export {formatTimer};