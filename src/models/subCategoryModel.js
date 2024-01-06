import mongoose, { Schema } from "mongoose";
import categoryModel from "./categoryModel";

const SubCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: categoryModel,
  },
  image: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const SubCategory =
  mongoose.models.SubCategory ||
  mongoose.model("SubCategory", SubCategorySchema);

export default SubCategory;
