import { getModelForClass, ModelOptions, prop } from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  _id: string;

  @prop({ default: null })
  firstname: string;

  @prop()
  lastname: string;

  @prop()
  email: string;

  @prop()
  password: string;

  @prop({ default: false })
  isAdmin: boolean;
}

const userModel = getModelForClass(User);

export default userModel;
