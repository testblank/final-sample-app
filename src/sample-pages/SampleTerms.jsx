import React from 'react';
import { Appbar, usePageLayout } from 'layout';
import { CheckBox } from '@components/CheckBox2';
import { useCheckTree } from '@hooks';
import { BaseButton } from '@components/Button';

const SampleTerms = ({ list }) => {
	const { renderPage } = usePageLayout();
	const [checked, onChange, requiredChecked] = useCheckTree(list);

	const onClickButton = () => {
		console.log('onClickNext');
	};

	const headerRender = () => <Appbar />;

	const bodyRender = () => (
		<div
			className={'flex flex-col p-4'}
			style={{ justifyContent: 'space-between' }}
		>
			<div className='text-left text-xl mb-8'>
          회원가입을 위해
				<br />
          이용 약관에 동의해주세요
			</div>
			{list && list.length > 0 && (
				<>
					<CheckBox
						list={list}
						checked={checked}
						onChange={onChange}
						rounded
						withLink
					/>
					<div className={'mt-4'}>
						<BaseButton
							text={'다음'}
							fontColor={'white'}
							className={'bg-blue-400'}
							onClick={onClickButton}
							disabled={!requiredChecked}
						/>
					</div>
				</>
			)}
		</div>
	);

	const render = renderPage({
		header: headerRender(),
		body: bodyRender(),
	});

	return render;
};

export default SampleTerms;
