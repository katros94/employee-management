export interface EmployeeType {
    name: string;
    email: string;
    phoneNumber: number;
    office: string;
    manager: string;
    orgUnit: string;
    mainText: string;
    socialType: SocialType;
    imagePortraitUrl: string;
    imageWallOfLeetUrl: string;
    highlighter: boolean;
    published: boolean;
    primaryRole: string;
    secondaryRole: string;
    area: string;
}

export interface SocialType {
    github?: string;
    twitter?: string;
    stackoverflow?: string;
    linkedIn: string;
}