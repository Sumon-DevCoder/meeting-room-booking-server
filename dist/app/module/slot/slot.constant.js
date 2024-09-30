"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSearchableFields = exports.USER_STATUS = exports.USER_ROLE = void 0;
exports.USER_ROLE = {
    SUPER_ADMIN: "SUPER_ADMIN",
    ADMIN: "ADMIN",
    USER: "USER",
};
exports.USER_STATUS = {
    ACTIVE: "ACTIVE",
    BLOCKED: "BLOCKED",
};
exports.userSearchableFields = ["name", "role", "email", "status"];
