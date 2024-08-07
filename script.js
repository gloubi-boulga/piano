const init = () => {
    startAnimation();

    let notes = { Q: '1', S: '3', D: '5', F: '6', G: '8', H: '10', J: '12', K: '13', L: '15', M: '17' };
    let darkNotes = { Z: '2', E: '4', T: '7', Y: '9', U: '11', O: '14', P: '16' };

    $("piano").onclick = e => {
        [2, 4, 7, 9, 11, 14, 16].includes(parseInt(e.target.id)) ? playNote(e.target.id, 'noteDark') : playNote(e.target.id, 'note');
    }

    window.addEventListener('keypress', (e) => {
        let key = e.key.toUpperCase();
        if (key in notes) {
            playNote(notes[key], 'note');
        } else if (key in darkNotes) {
            playNote(darkNotes[key], 'noteDark');
        }
    });
}

const startAnimation = () => {
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

const playNote = (id, note) => {
    $(id).classList.add(note);
    var audio = new Audio(`notes/${id}.wav`);
    audio.volume = 0.3;
    audio.play().catch(() => {}); 
    setTimeout(() =>{ $(id).classList.remove(note); }, 350);
}

window.onload = init;