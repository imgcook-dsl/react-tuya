import React, { Component } from 'react'
import { Button } from '@tuya-fe/moon'

import styles from './index.scss'

class Block_0 extends Component {
  render() {
    return (
      <div className={styles.mod}>
        <div className={styles.hd}>
          <span className={styles.login}>登录</span>
          <div className={styles.color} />
          <span className={styles.freeRegistration}>免费注册</span>
          <div className={styles.colorDiv} />
          <img className={styles.juxing} src={'https://img.alicdn.com/tfs/TB1TYwsDCf2gK0jSZFPXXXsopXa-20-24.png'} />
          <span className={styles.myOrder}>我的订单</span>
        </div>
        <div className={styles.bd}>
          <span className={styles.info}>请输入搜索商品</span>
          <img
            className={styles.sousuo}
            src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/778b1a10869711ea9aa08f150f6c17cd.png'}
          />
          <div className={styles.container}>
            <img
              className={styles.largeIcon}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/772b1fc0869711ea8dc989bed94146f5.png'}
            />
            <img
              className={styles.logo}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/775f2810869711eaa54a797abe963115.png'}
            />
          </div>
          <div className={styles.empty} />
          <div className={styles.tagWrap}>
            <span className={styles.tag}>搜 索</span>
          </div>
          <Button className={styles.group} type={'primary'} type={'primary'}></Button>
        </div>
      </div>
    )
  }
}

export default Block_0
