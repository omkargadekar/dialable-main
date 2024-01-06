import { User } from "../../../src/models/userModel";

export default async function GET(req, res) {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
}