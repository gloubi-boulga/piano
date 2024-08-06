function init() {
    startAnimation();   

    const keyCodes = {
        113: 1,
        122: 2,
        115: 3,
        101: 4,
        100: 5,
        102: 6,
        116: 7,
        103: 8,
        121: 9,
        104: 10,
        117: 11,
        106: 12,
        107: 13,
        111: 14,
        108: 15,
        112: 16,
        109: 17,
    }

    $("piano").onclick = e => {
        [2, 4, 7, 9, 11, 14, 16].includes(parseInt(e.target.id)) ? playNote(e.target.id, "noteDark") : playNote(e.target.id, "note");
    }

    window.addEventListener('keypress', (e) => {
        for (const [key, value] of Object.entries(keyCodes)) {
            if(key == e.keyCode || (key - 32) == e.keyCode) {
                [2, 4, 7, 9, 11, 14, 16].includes(value) ? playNote(value.toString(), "noteDark") : playNote(value.toString(), "note");
            }
        }
    })
}
function startAnimation() {
    setTimeout(() => { 
        playNote("1", "note");
        playNote("17", "note"); 
    }, 0);

    setTimeout(() => { 
        playNote("3", "note");
        playNote("15", "note"); 
    }, 150);

    setTimeout(() => { 
        playNote("5", "note");
        playNote("13", "note"); 
    }, 300);

    setTimeout(() => { 
        playNote("6", "note");
        playNote("12", "note"); 
    }, 450);

    setTimeout(() => { 
        playNote("8", "note");
        playNote("10", "note"); 
    }, 600);
}

function playNote(id, note) {
    id = id.toString();
    $(id).classList.add(note);
    var audio = new Audio('notes/' + parseInt(id) + '.wav');
    audio.volume = 0.3;
    audio.play().catch((error) => {});
    setTimeout(function(){ $(id).classList.remove(note); }, 500);
}
(function() {
    var fired = 0;
    var timer = null;
	function onReady(ev) {
		if (timer) {
            clearTimeout(timer);
        }
		if (fired) {
            return false;
        }
		if (document.readyState == "complete") {
            fired = 1;
            window.removeEventListener("load", onReady, false);
            document.removeEventListener("DOMContentLoaded", onReady, false);
            document.removeEventListener("readystatechange", onReady, false);
            init();
		} 
		else {
            timer = setTimeout(onReady, 1);
        }
    }
    window.addEventListener("load", onReady, false);
    document.addEventListener("DOMContentLoaded", onReady, false);
    document.addEventListener("readystatechange", onReady, false);
    timer = setTimeout(onReady, 10);
	if (document.readyState == "complete") {
        onReady();
    }
} ());