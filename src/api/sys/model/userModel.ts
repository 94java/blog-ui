/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  id: string | number;
  token: string;
  roles: RoleInfo[];
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  id: string | number;
  // 用户名
  username: string;
  // 昵称
  nickname: string;
  // 年龄
  age: string | number;
  // 性别
  sex: string | number;
  // 手机号
  phone: string;
  // 邮箱
  email: string;
  // 头像
  avatar: string;
  // 签名
  sign?: string;
}
