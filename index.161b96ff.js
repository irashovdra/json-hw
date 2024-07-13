document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("studentForm"),t=document.getElementById("studentsTable").getElementsByTagName("tbody")[0],n=document.getElementById("search");function d(){fetch("/students").then(e=>e.json()).then(e=>{t.innerHTML="",e.forEach(e=>{t.insertRow().innerHTML=`
                        <td>${e.firstName}</td>
                        <td>${e.lastName}</td>
                        <td>${e.age}</td>
                        <td>${e.course}</td>
                        <td>${e.faculty}</td>
                        <td>${e.subjects.join(", ")}</td>
                        <td>
                            <button onclick="editStudent('${e.id}')">Edit</button>
                            <button onclick="deleteStudent('${e.id}')">Delete</button>
                        </td>
                    `})})}e.addEventListener("submit",function(t){t.preventDefault(),fetch("/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:document.getElementById("firstName").value,lastName:document.getElementById("lastName").value,age:document.getElementById("age").value,course:document.getElementById("course").value,faculty:document.getElementById("faculty").value,subjects:document.getElementById("subjects").value.split(",").map(e=>e.trim())})}).then(e=>e.json()).then(t=>{alert(t.message),d(),e.reset()})}),n.addEventListener("input",function(){let e=n.value.toLowerCase();for(let n of t.getElementsByTagName("tr")){let t=n.getElementsByTagName("td"),d=t[1].textContent.toLowerCase(),o=t[3].textContent.toLowerCase();d.includes(e)||o.includes(e)?n.style.display="":n.style.display="none"}}),window.editStudent=function(e){},window.deleteStudent=function(e){fetch(`/students/${e}`,{method:"DELETE"}).then(e=>e.json()).then(e=>{alert(e.message),d()})},d()});
//# sourceMappingURL=index.161b96ff.js.map
