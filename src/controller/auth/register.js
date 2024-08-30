import bcrypt from 'bcrypt';
import { UserModel } from '../../model/auth/registerModal.js';

export const userRegister = async (req,res) => {
    try {
        const check_user_email = await UserModel.findOne({ email: req?.body?.email });
        const check_user_mobile = await UserModel.findOne({ number: req?.body?.number });

        if (check_user_mobile) {
           return res.json ({
                status: 400,
                message: "Mobile number already exists"
            });
        }

        if (check_user_email) {
           return res.json ({
                status: 400,
                message: "Email already exists"
            });
        }

        req.body.password = await bcrypt.hash(req?.body?.password, 10);
        const newUser = new UserModel(req?.body);
        await newUser.save();

        res.json({
            status: 201,
            message: "You have registered successfully"
        });

    } catch (error) {
        console.error(error);
        return {
            status: 500,
            message: "something went wrong please try again"
        };
    }
};
