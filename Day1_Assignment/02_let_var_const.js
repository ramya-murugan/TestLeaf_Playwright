/*const browserVersion = "Chrome"

function getBrowserVersion(browserVersion){
    
    if(browserVersion == "Chrome"){
        var browserVersion = "Firefox"
        console.log(browserVersion)
    }
    console.log(browserVersion)
}

getBrowserVersion(browserVersion)

// output: Firefox Firefox , Reason: Var is a global scope data type*/

const browserVersion = "Chrome"

function getBrowserVersion(browserVersion){
    
    if(browserVersion == "Chrome"){
        let browserVersion = "Firefox"
        console.log(browserVersion)
    }
    console.log(browserVersion)
}

getBrowserVersion(browserVersion)

// output: Firefox Chrome , Reason: Let is a block scope