function setTags(project, name, tags, token) {
    $.ajax({
        url: "/api/settags",
        type: "post",
        data: {
            project: project,
            name: name,
            tags: tags,    
        },
        headers: {
            "Authorization": "Basic "+ token
        },
        dataType: "json",
        success: function(data) {
            console.info(data)
        }

    });
}

function setAssignTask(project, name, task, status, token) {
    $.ajax({
        url: "/api/setassigntask",
        type: "post",
        data: {
            project: project,
            name: name,
            task: task,
            status: status,
        },
        headers: {
            "Authorization": "Basic "+ token
        },
        dataType: "json",
        success: function(data) {
            console.info(data)
        }

    });
}

function setFrame(mode, project, name, frame, token) {
    $.ajax({
        url: "/api/" + mode,
        type: "post",
        data: {
            project: project,
            name: name,
            frame: frame,
        },
        headers: {
            "Authorization": "Basic "+ token
        },
        dataType: "json",
        success: function(data) {
            console.info(data)
        }
    });
}


function setScanTimecodeIn(project, name, timecode, token) {
    $.ajax({
        url: "/api/setscantimecodein",
        type: "post",
        data: {
            project: project,
            name: name,
            timecode: timecode,
        },
        headers: {
            "Authorization": "Basic "+ token
        },
        dataType: "json",
        success: function(data) {
            console.info(data)
        }
    });
}

function setScanTimecodeOut(project, name, timecode, token) {
    $.ajax({
        url: "/api/setscantimecodeout",
        type: "post",
        data: {
            project: project,
            name: name,
            timecode: timecode,
        },
        headers: {
            "Authorization": "Basic "+ token
        },
        dataType: "json",
        success: function(data) {
            console.info(data)
        }
    });
}

function setJustTimecodeIn(project, name, timecode, token) {
    $.ajax({
        url: "/api/setjusttimecodein",
        type: "post",
        data: {
            project: project,
            name: name,
            timecode: timecode,
        },
        headers: {
            "Authorization": "Basic "+ token
        },
        dataType: "json",
        success: function(data) {
            console.info(data)
        }
    });
}

function setJustTimecodeOut(project, name, timecode, token) {
    $.ajax({
        url: "/api/setjusttimecodeout",
        type: "post",
        data: {
            project: project,
            name: name,
            timecode: timecode,
        },
        headers: {
            "Authorization": "Basic "+ token
        },
        dataType: "json",
        success: function(data) {
            console.info(data)
        }
    });
}