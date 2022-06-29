import {getRequest} from "@/utils/api";

export function getFriendsByUserId(userId) {
    return getRequest(`/treeholecore/treehole-user-friends/getFriendsByUserId/${userId}`)
}
