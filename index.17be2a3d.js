document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("studentForm"),t=document.getElementById("studentsTable").getElementsByTagName("tbody")[0],n=document.getElementById("search");function o(){fetch("/students").then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{t.innerHTML="",e.forEach(e=>{t.insertRow().innerHTML=`
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
                    `})}).catch(e=>console.error("Error fetching students:",e))}e.addEventListener("submit",function(t){t.preventDefault(),fetch("/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:document.getElementById("firstName").value,lastName:document.getElementById("lastName").value,age:document.getElementById("age").value,course:document.getElementById("course").value,faculty:document.getElementById("faculty").value,subjects:document.getElementById("subjects").value.split(",").map(e=>e.trim())})}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(t=>{alert(t.message),o(),e.reset()}).catch(e=>console.error("Error adding student:",e))}),n.addEventListener("input",function(){let e=n.value.toLowerCase();for(let n of t.getElementsByTagName("tr")){let t=n.getElementsByTagName("td"),o=t[1].textContent.toLowerCase(),d=t[3].textContent.toLowerCase();o.includes(e)||d.includes(e)?n.style.display="":n.style.display="none"}}),window.editStudent=function(e){},window.deleteStudent=function(e){fetch(`/students/${e}`,{method:"DELETE"}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{alert(e.message),o()}).catch(e=>console.error("Error deleting student:",e))},o()});
//# sourceMappingURL=index.17be2a3d.js.map
