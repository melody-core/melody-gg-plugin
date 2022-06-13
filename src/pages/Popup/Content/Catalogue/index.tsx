/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 05:28:28
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-13 11:12:55
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/Content/Catalogue/index.tsx
 * @Description: update here
 */

import { Tree, Card, Modal } from 'antd'
import XForm from '../../../../components/XForm';
import MOCK_CATALOGUES from './../../../../MOCK_DATA/catalogue.json'; 
import { useDataSource, useFunctionSelect } from './effect'

import type { FC } from 'react';
import type { CatalogueProps } from './type'
import styles from './index.module.css'



const Catalogue: FC<CatalogueProps> = ({setCuRole}) => {
  const {treeData} = useDataSource();
  const {
    handleFuncSelect,
    isShowModal,
    configSchema,
    modalTitle,
    modalContrulor
  } = useFunctionSelect();
  return (
    <Card 
      className={styles['catalogue-wrap']}
      title="功能列表"
      extra={<a onClick={setCuRole({
        role: -1,
        roleName: ''
      })}>返回角色选择</a>}
    >
      <Tree 
        treeData={treeData}
        onSelect={handleFuncSelect}
      />
      {isShowModal && <Modal 
        visible={true}
        title={modalTitle}
        footer={null}
        onCancel={modalContrulor(false)}
      >
        {configSchema && <XForm config={configSchema}/>}
      </Modal>}
    </Card>
  )
}


export default Catalogue