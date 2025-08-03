import Notice from "../model/noticeSchema.js";


const getAllNotice = async (req, res) => {
    try {
        const allNotices = await Notice.find({});
        if (!allNotices) {
            res.status(404).json({
                success: false,
                message: "Notices are not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Notices fetched successfully",
            data: allNotices
        });
    }
    catch (err) {
        console.log(err);
    }
}

export {getAllNotice} ;


