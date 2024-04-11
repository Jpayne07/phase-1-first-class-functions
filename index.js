function receivesAFunction(Spy){
    Spy ()
    return Spy()
}

function spy(){
    return "peace"
}

function returnsANamedFunction(){
    return spy;
}

function returnsAnAnonymousFunction() {
    return function(){
        
    }
}