let currentClock;
function searchBackend(){
    console.timeLog("request sent to be backend");

}
function debouncedSearchBackend(){
    clearTimeout(currentClock);
    currentClock=setTimeOut(searchBackend,30);

}
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();