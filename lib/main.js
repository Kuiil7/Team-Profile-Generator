//HTML header section for module export
const headerBlock = function () {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <title>Team Profile Generator</title>

<style>
.display-4 {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center; 
            font-weight: bold;
        }

.container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
       
.jumbotron {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
}

.card {
  margin: 10px;
}

ul {
  width: 0 auto;
}
      
</style>
</head>

<body>
    
    <div class="jumbotron jumbotron-fluid bg-primary text-white">
          <h1 class="display-4 text-center">&nbsp;My Team</h1>
          <h1 class="display-4 text-center"><i class="fas fa-users"></i></h1>
      
      </div>`

};

//HTML Manager section for module export


const managerBlock = function (data) {
  return `
<div class="container">
   
<div class="card text-black bg-light" style="width: 18rem;">
            <div class="card-body bg-primary ">
            
                <h1 class="manager-name text-white text-center">${data.name}</h1>

              <h2 class="text-white text-center"><i class="fas fa-mug-hot"></i>&nbsp;Manager</h2>
            </div>
<div class="container">
              <ul class="list-group list-group" style="padding-top:30px;padding-bottom:30px;">
   
                <li class="list-group-item">ID: &nbsp; ${data.id} </li>
                <li class="list-group-item">Email: &nbsp; <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office Number: &nbsp; ${data.officeNumber}</li>
              </ul>
        
          </div>
        </div>`
};

//HTML Engineer section for module export

const engineerBlock = function (data) {
  return `
        <div class="card text-black bg-light" style="width: 18rem;">
            <div class="card-body bg-primary ">
                <h1 class="manager-name text-white text-center">${data.name}</h1>

              <h2 class="text-white text-center"><i class="fas fa-tools"></i>&nbsp;Engineer</h2>
            </div>
<div class="container">
              <ul class="list-group list-group" style="padding-top:30px;padding-bottom:30px;">
   
                <li class="list-group-item">ID: &nbsp; ${data.id} </li>
                <li class="list-group-item">Email: &nbsp; <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">GitHub: &nbsp; <a href="https://github.com/${data.github}">${data.github}</a></li>
              </ul>
        
          </div>
        </div>`
};

//HTML Intern section for module export

const internBlock = function (data) {
  return `
        <div class="card text-black bg-light" style="width: 18rem;">
            <div class="card-body bg-primary ">
                <h1 class="manager-name text-white text-center">${data.name}</h1>

              <h2 class="text-white text-center"><i class="fas fa-glasses"></i>&nbsp;Intern</h2>
            </div>
<div class="container">
              <ul class="list-group list-group" style="padding-top:30px;padding-bottom:30px;">
   
                <li class="list-group-item">ID: &nbsp; ${data.id}</li>
                <li class="list-group-item">Email: &nbsp; <a href='#'>${data.email}</a></li>
                <li class="list-group-item">School:&nbsp;${data.school}</li>
              </ul>
        
          </div>
        </div>`
      };
      const footerBlock = function() {
        return `</div>
        </div>
    </div>  
    </body>
    </html>`
};

//combine all modules to be exported to generate HTML file
module.exports = {
  manager: managerBlock,
  engineer: engineerBlock,
  intern: internBlock,
  header: headerBlock,
  footer: footerBlock,
}