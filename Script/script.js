let btn = document.getElementById("addBtn");
let result = document.getElementById("result");

function attachDeleteHandlers() {
    let deleteButtons = document.querySelectorAll(".delete-btn");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = function() {
            this.parentNode.parentNode.remove();
            document.querySelector(".Final-result").remove();
        };
    }
}

// Initial attachment of delete handlers
attachDeleteHandlers();

// Grade point values
const gradePoints = {
    'A+': 4.0,
    'A': 3.7,
    'A-': 3.4,
    'B+': 3.2,
    'B': 3.0,
    'B-': 2.8,
    'C+': 2.6,
    'C': 2.4,
    'C-': 2.2,
    'D+': 2,
    'D': 1.5,
    'D-': 1,
    'F': 0
};

btn.onclick = function() {
    let newcourse = document.createElement("tr");
    newcourse.innerHTML = `
        <td><input type="text" name="course" id="course"></td>
        <td><input type="text" name="credit" id="credit"></td>
        <td class="grade-column">
            <select name="grade" id="grade">
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C-">C-</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="D-">D-</option>
                <option value="F">F</option>
            </select>
            <button type="button" class="delete-btn">X</button>
        </td>
    `;
    document.querySelector("table").appendChild(newcourse);
    // Reattach delete handlers after adding new course
    attachDeleteHandlers();
};

result.onclick = function() {
    let div = document.createElement("div");
    div.className = "Final-result";
    
    let creditInputs = document.querySelectorAll("input[name='credit']");
    let gradeSelects = document.querySelectorAll("select[name='grade']");
    let totalCredit = 0;
    let totalPoints = 0;
    
    for (let i = 0; i < creditInputs.length; i++) {
        const credits = Number(creditInputs[i].value) || 0;
        const grade = gradeSelects[i].value;
        const points = gradePoints[grade];
        
        totalCredit += credits;
        totalPoints += credits * points;
    }
    
    let gpa = 0;

    gpa = totalPoints / totalCredit;
    if (totalCredit === 0) {
        gpa = 0;
    } else {
        gpa = gpa.toFixed(2);
    }
    
    div.innerHTML = `Your GPA Is ${gpa}`;
    document.body.appendChild(div);
    attachDeleteHandlers();
};
