import React, { useState } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

import "./Property.css"

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['涉刑资产', '诉讼资产', '破产资产', '自行处置'];


interface PropertyProps {
    setReturnValue: Function
}

const Property: React.FC<PropertyProps> = ({ setReturnValue }) => {
    const [checkedList, setCheckedList] = useState<string[]>([]);

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

    const onChange = (list: string[]) => {
        setCheckedList(list);
        const codes = list.map(option => {
            const index = plainOptions.indexOf(option);
            return index + 1;
        });
        codes.length > 0 ? setReturnValue(codes) : setReturnValue([]);
        // console.log(codes.length > 0 ? codes.join(',') : '0');
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        const isCheckedAll = e.target.checked;
        setCheckedList(isCheckedAll ? plainOptions : []);
        isCheckedAll ? setReturnValue([1, 2, 3, 4]) : setReturnValue([]);
        // console.log(isCheckedAll ? '1,2,3,4' : '0');
    };

    return (
        <div id="property-select">
            <span className='select-type'>资产类型</span>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                不限
            </Checkbox>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </div>
    );
};

export default Property;