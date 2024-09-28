import Contact from "../model/contact.model.js";

const contactForm=async (req,res)=>{
    const { name, email, message } = req.body;
    console.log("Hi");
    try {
        const newMessage = new Contact({
            name: name,
            email: email,
            message: message,
        });
        await newMessage.save();

        return res.status(200).json({message: "message send successful"});
    } catch (error) {
        return res.status(500).json({message: "message not delivered"});
    }
};

export default contactForm;