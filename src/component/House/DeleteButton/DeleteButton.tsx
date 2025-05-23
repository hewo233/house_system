import { Button } from "antd"
import React from "react"
import { API_BASE_URL } from "../../../constants";

interface DeleteButtonProps {
    type: number
}

const handleClick = async (type: number) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('未找到认证token');

        const response = await fetch(`${API_BASE_URL}//house/delete/${type}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`  // 添加Authorization头
            },
        });

        if (!response.ok) {
            throw new Error('删除失败');
        }
        window.close()
    } catch (err) {
        console.error('请求失败:', err);
    }
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ type }) => {
    return (
        <div>
            <Button type="primary" onClick={() => handleClick(type)}>
                删除房源
            </Button>
        </div>

    )
}

export default DeleteButton;