import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './profiles.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private prModel: Model<ProfileDocument>,
  ) {}

  getProfiles(): Promise<Profile[]> {
    return this.prModel.find().exec();
  }
  getSpecificProfile(id: string): Promise<Profile> {
    return this.prModel.findOne({ _id: id }).exec();
  }
  async validateProfile(body: any) {
    const profile: Profile = await this.prModel.findOne({ email: body.email });

    if (profile) {
      console.log('validate email signup', profile);
      throw new HttpException('This email is already used!', 403);
    }
    return this.createProfile(body);
  }
  createProfile(profile: any) {
    const savedProfile = new this.prModel(profile);
    return savedProfile.save();
  }
  deleteProfile(id: string) {
    return this.prModel.deleteOne({ _id: id });
  }
  updateProfile(id: string, profile: any) {
    return this.prModel.updateOne({ _id: id }, profile);
  }
  async findUser(email: string) {
    return this.prModel.findOne({ email: email });
  }

  async findEmail(user: any) {
    const searchedEmail = await this.prModel.findOne({ email: user.email });

    if (searchedEmail) throw new HttpException('Email unavailable', 200);
    throw new HttpException('Email available', 200);
  }
}
