const PRS = require('prs-lib');

let demo = async function () {
  try {
    // 通过 Web 授权获取对应的 authAddress 和 token，可参考 ./samples/webAuth.js。
    const authAddress = '24bb85b2a2e72af849e8a83e9f2fce1d7f9f6685';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTIzNTE5ODQsImp0aSI6IjUzZWQxOTg1LThhMDktNDM3MC04NzY5LTI3ZjVhODlhNWIwOSIsImRhdGEiOnsiYXV0aEFkZHJlc3MiOiIyNGJiODViMmEyZTcyYWY4NDllOGE4M2U5ZjJmY2UxZDdmOWY2Njg1In0sInByb3ZpZGVyIjoiZGFwcCIsImV4cCI6MTU1MjYxMTE4NH0.-efWwQ6PItcA2rLQ88cIJwglrQh7cNY45nFLh9SyHtY';

    // 初始化 client
    const client = new PRS({ env: 'env', debug: true, address: authAddress, token: token });

    // 目前 PRS 支持创建文本草稿
    let draft = {
      title: `draft title ${String(Date.now())}`,
      content: `draft content ${String(Date.now())}`,
      mimeType: 'text/plain'
    }
    const draftRes = await client.draft.create(draft);
    const draftId = draftRes.body.draftId;

    // 根据 id 更新草稿内容
    let draftNew = {
      title: `draft update title ${String(Date.now())}`,
      content: `draft update content ${String(Date.now())}`,
      mimeType: 'text/plain'
    }
    await client.draft.update(draftId, draftNew);

    // 根据 id 获取草稿
    const res = await client.draft.getById(draftId);
    console.log(res.body);


  } catch (err) {
  }
}

demo();