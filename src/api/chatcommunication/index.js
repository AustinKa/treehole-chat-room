import {getRequest} from "@/utils/api";

export  function getTreeholeChatCommunications(fromId,toId) {
    return getRequest(`/treeholecore/treehole-chat-communication/${fromId}/${toId}`)
}
