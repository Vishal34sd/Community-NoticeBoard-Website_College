import LostOrFound from "../model/lost_foundSchema.js";



const addLostOrFound = async (req, res) => {
    try {
        const { type, title, description  , dateLostOrFound ,location , reportedBy , phone } = req.body;
        const newDetails = await LostOrFound({
            type,
            title,
            description, dateLostOrFound , location , 
            reportedBy , phone  
        });;
        const saveDetails = await newDetails.save();
        if (!saveDetails) {
            return res.status(400).json({
                success: false,
                message: "Details cannot be saved"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Details added successfully "
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong "
        })
    }
}

const editLostOrFound = async (req, res) => {
    try {
        const DetailId = req.params.id;
        const getUpdatedDetail = req.body;
        const updatedDetail = await Book.findByIdAndUpdate(
            DetailId,
            getUpdatedDetail,
            {
                new: true,
            }
        );

        if (!updatedDetail) {
            res.status(404).json({
                success: false,
                message: "details is not found with this ID",
            });
        }

        res.status(200).json({
            success: true,
            message: "details updated successfully",
            data: updatedDetail
        });

    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}


const deleteLostOrFound = async (req, res) => {
  try {
    const getDetailsId = req.params.id;
    const deletedDetail = await Book.findByIdAndDelete(getDetailsId);
    

    if (! deletedDetail) {
      res.status(404).json({
        success: false,
        message: "complaint is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message :  "Details deleted successfully"
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

export {addLostOrFound , editLostOrFound , deleteLostOrFound}