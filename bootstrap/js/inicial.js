const login = document.getElementById('confirma-login');
const email = document.getElementById('email-login');
function testaLogin() {
    console.log(email.value);
    if(email.value === "professor@ufrn.br")
    {
        location.href = "file:///F:/UFRN/PES/Projeto/professor.htmll";
    }
    else
    {
        location.href = "file:///F:/UFRN/PES/Projeto/turma.html";
    }   
}