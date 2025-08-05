import Complaint from "../model/complaintSchema.js"


const addComplaint = async (req, res) => {
    try {
        const { title, description, category } = req.body;
        const newComplaint = await Complaint({
            title,
            description,
            category
        });
        const saveComplaint = await newComplaint.save();
        if (!saveComplaint) {
            return res.status(400).json({
                success: false,
                message: "complaint cannot be saved"
            });
        }
        return res.status(200).json({
            success: true,
            message: "complaint added successfully "
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

const editComplaint = async (req, res) => {
    try {
        const complaintId = req.params.id;
        const getUpdatedcomplaint = req.body;
        const updatedComplaint = await Book.findByIdAndUpdate(
            complaintId,
            getUpdatedcomplaint,
            {
                new: true,
            }
        );

        if (!updatedComplaint) {
            res.status(404).json({
                success: false,
                message: "complaint is not found with this ID",
            });
        }

        res.status(200).json({
            success: true,
            message: "complaint updated successfully",
            data: updatedComplaint,
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


const deleteComplaint = async (req, res) => {
  try {
    const getComplaintId = req.params.id;
    const deletedComplaint = await Book.findByIdAndDelete(getComplaintId);
    

    if (!deletedComplaint) {
      res.status(404).json({
        success: false,
        message: "complaint is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      data: deletedComplaint,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};



export { addComplaint , editComplaint , deleteComplaint}