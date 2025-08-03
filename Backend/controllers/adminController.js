import Notice from "../model/noticeSchema.js"


const addNotice = async(req, res)=>{
    try{
        const {title , content} = req.body ;
        if(!title || !content){
            res.status(400).json({
                success : false ,
                message : "title or content not provided"
            })
        }
        const newNotice = await Notice({
            title , 
            content
        });
        const saveNotice = await newNotice.save();
        if(!saveNotice){
            res.status(400).json({
                success : false ,
                message : "Notice not saved "
            })
        }
        res.status(200).json({
            success : true ,
            message : "Notice added successfully ",
            data : saveNotice
        });
    }
    catch(err){
        console.log(err);
    }
}

const  editNotice = async(req, res)=>{
    try{
        const NoticeId = req.params.id ;
        const newData = req.body;

        const updatedNotice = await Notice.findByIdAndUpdate(NoticeId , newData , {new:true});
        if(!updatedNotice){
            return res.status(400).json({
                success : false ,
                message : "Notice did not updated"
            });
        }
        return res.status(200).json({
            success : true ,
            message : "notice updated successfully",
            data : updatedNotice
        });
    }
    catch(err){
        console.log(err);
    }
}

export {addNotice , editNotice}