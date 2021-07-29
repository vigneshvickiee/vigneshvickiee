
const Student = require('../models/st')

class  main{

    static async fetchDetails(req,res)
    {
        var id =req.query.id;

        if(!id)
        {
            try
            {
                const students = await Student.find()
                res.json(students);
            }
            catch(err)
            {
                res.send('Error ' + err)
            }
        }
        else
        {
            try
            {
                const student = await Student.findById(id)
                res.json(student)
            }
            catch(err)
            {
             res.send('Error ' + err)
            }
        }
    }

   static async addDetails(req,res)
    {
        const student = new Student({
            rollno: req.body.rollno,
            name: req.body.name,
            dept: req.body.dept
        })
        try{
            const a1 =  await student.save()
            res.json(a1)
        }catch(err){
            res.send('Error')
        }
    }

    static async  deleteDetails(req,res)
    {
        const id =req.query.id;
        const student= await Student.findById(id)
        try{
            await student.remove()
            res.send("removed successfully")
        }
        catch(err)
        {
            res.send("deletion not successful")
        }
    }

    static async updateDetails(req,res)
    {
        const id =req.query.id;
        const st=req.body;

        if(st.rollno)
        {
            const student= await Student.findById(id)
            student.rollno=st.rollno
            const a1 = await student.save()
            res.json(a1)
        }
        else if(st.name)
        {
            const student= await Student.findById(id)
            student.name=st.name
            const a1 = await student.save()
            res.json(a1)
        }
        else if(st.dept)
        {
            const student= await Student.findById(id)
            student.dept=st.dept
            const a1 = await student.save()
            res.json(a1)
        }
        else
        {
            res.send("invalid details entry");
        }
    }
}

module.exports=main;