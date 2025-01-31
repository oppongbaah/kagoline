import { RiderModel } from "../../models";
import { IUserResponseRawData,
	ICheckUser,
	IUserSignupInput } from "../../interfaces";
import { Roles } from "../../enums";
import { QueryServices } from "../query.svc";

class RiderServices extends QueryServices {
	constructor() {
		super(RiderModel);
	}

	public async findAll(): Promise<IUserResponseRawData[]> {
		return this.fetchAll();
	}

	public async saveOne(userData: IUserSignupInput) :Promise<IUserResponseRawData> {
		const response = await this.push<IUserSignupInput, IUserResponseRawData>([userData]);
		return response[0];
	}

	public async riderExist(email: string, role: Roles | string = Roles.empty) : Promise<ICheckUser> {
		return this.userExist(email, role);
	}
}

export { RiderServices };
