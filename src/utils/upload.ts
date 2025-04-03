// 上传JSON数据
export const uploadJsonData = async (jsonData: any, type: number) => {
    const urlNew = 'https://m1.apifoxmock.com/m1/6122515-5814159-default/house/createInfo'
    const urlModify = `https://m1.apifoxmock.com/m1/6122515-5814159-default/house/modifyInfo/${type}`
    try {
        const response = await fetch(type == 0 ? urlNew : urlModify, {
            method: type == 0 ? 'POST' : "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });

        if (!response.ok) {
            throw new Error('JSON数据上传失败');
        }

        console.log('JSON数据上传成功');
    } catch (error) {
        console.error('上传JSON数据时出错:', error);
        throw error;
    }
};

// 上传图片
export const uploadImages = async (images: any[], type: number) => {
    const urlNew = 'https://m1.apifoxmock.com/m1/6122515-5814159-default/house/createPic'
    const urlModify = `https://m1.apifoxmock.com/m1/6122515-5814159-default/house/modifyPic/${type}`

    try {
        const formData = new FormData();
        images.forEach((file) => {
            formData.append('images', file.originFileObj);
        });

        const response = await fetch(type == 0 ? urlNew : urlModify, {
            method: type == 0 ? 'POST' : "PUT",
            body: formData,
        });

        if (!response.ok) {
            throw new Error('图片上传失败');
        }

        console.log('图片上传成功');
    } catch (error) {
        console.error('上传图片时出错:', error);
        throw error;
    }
};

// 上传富文本内容
export const uploadRichText = async (htmlContent: any, type: number) => {
    const urlNew = 'https://m1.apifoxmock.com/m1/6122515-5814159-default/house/createRichText'
    const urlModify = `https://m1.apifoxmock.com/m1/6122515-5814159-default/house/modifyRichText/${type}`

    try {
        const response = await fetch(type == 0 ? urlNew : urlModify, {
            method: type == 0 ? 'POST' : "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: htmlContent }),
        });
        if (!response.ok) {
            throw new Error('富文本内容上传失败');
        }

        console.log('富文本内容上传成功');
    } catch (error) {
        console.error('上传富文本内容时出错:', error);
        throw error;
    }
};