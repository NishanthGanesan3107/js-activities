var studentsDetails = {}
var studentCnt = 0;

$('document').ready(function(){
    
    $('#form-submit').submit(function(){


        studentCnt++;

        studentsDetails["STUDENT-"+studentCnt]={"Student Name":$('#studentName').val(),"Student Age":+$('#studentAge').val(),"Student School Name":$('#schoolName').val()}

        // let studentDetailsTable = "<tr><td>"+"student"+studentCnt+"</td><td>"+studentsDetails["student"+studentCnt]["Student Name"]+"</td><td>"+studentsDetails["student"+studentCnt]["Student Age"]+"</td><td>"+studentsDetails["student"+studentCnt]["Student School Name"]+"</td><div><i class='fas fa-trash' id='deleteBtn'></i></div></tr>"

        var studentDetailsTable = `

        <tr id='STUDENT-${studentCnt}'>
            <td>${"STUDENT-"+studentCnt}</td>
        
            <td>${studentsDetails["STUDENT-"+studentCnt]["Student Name"]}</td>

            <td>${studentsDetails["STUDENT-"+studentCnt]["Student Age"]}</td>
            <td>${studentsDetails["STUDENT-"+studentCnt]["Student School Name"]}</td>

            <td><i class='fa fa-trash' onclick='onDelete(${studentCnt})'></i></td>

        </tr>

        
        `;


        console.log(studentsDetails);
        $('#studentDetailsTable').append(studentDetailsTable)
        $('#studentName').val("")
        $('#studentAge').val(0)
        $('#schoolName').val("")


    })
   
   
})
function onDelete(id){
    delete studentsDetails["STUDENT-"+id]
    $('#STUDENT-'+id).remove()
}