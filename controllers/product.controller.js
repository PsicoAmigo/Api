export const  products = (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            {
            subject: "programacion V",
            semester: "7",
            data: new Date().toDateString(),
            },
        ],
    });
};