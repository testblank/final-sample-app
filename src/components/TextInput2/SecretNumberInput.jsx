import { useTextInput } from 'customHooks';
// import PrimaryInputPublish from 'publish/PrimaryInputPublish2';

const SecretNumberInput = props => {
	const [birthValue, onChangeBirthValue, captionBirthText] = useTextInput(
		'birth',
	);
	const [personalNumValue, onChangePersonalNumValue, onKeyDownPersonalNum] = useTextInput('personalNum');

	return (
		<div className={'flex flex-col max-w-xs items-start'}>
			<div
				className={'flex items-center border border-black rounded'}
				style={captionBirthText.length > 0 ? { borderColor: 'red' } : {}}
			>
				<PrimaryInputPublish
					{...props}
					placeholder={'YYYYMMDD'}
					onChange={onChangeBirthValue}
					value={birthValue}
					autoFocus
					className={'text-center border-none tracking-widest'}
				/>
				<div>-</div>
				<PrimaryInputPublish
					{...props}
					placeholder={'0●●●●●●'}
					onChange={onChangePersonalNumValue}
					value={personalNumValue}
					onKeyDown={onKeyDownPersonalNum}
					className={'text-center border-none tracking-widest'}
				/>
			</div>
			<div className={'text-red-500 text-xs pl-2'}>{captionBirthText}</div>
		</div>
	);
};

export default SecretNumberInput;
