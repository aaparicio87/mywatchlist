import React from 'react';
import { View, Dimensions } from 'react-native'
import {
    BottomSheetView,
    BottomSheetScrollView,
    BottomSheetModal,
    useBottomSheetSpringConfigs
} from '@gorhom/bottom-sheet';

import { Instrument } from '@/reducers/watchList';
import { useGlobalStyles } from '@/hooks/useGlobalStyled';

import {
    ActionDetail,
    ChartDetail,
    HeaderDetail,
    PriceSection,
    SymbolSection,
    StatsSection
} from './components';
import { createStyles } from './styled';


const screenWidth = Dimensions.get('window').width;

interface InstrumentDetailsBottomSheetProps {
    instrument: Instrument | null;
    isVisible: boolean;
    onClose: () => void;
    toggleFavorite: (instrumentId: string) => void;
    removeFromWatchlist: (instrumentId: string) => void;
}

export const InstrumentDetail = ({
    instrument,
    isVisible,
    onClose,
    toggleFavorite,
    removeFromWatchlist
}: InstrumentDetailsBottomSheetProps) => {

    const { colors } = useGlobalStyles();
    const styles = createStyles(colors);
    const bottomSheetRef = React.useRef<BottomSheetModal>(null)
    const snapPoints = React.useMemo(() => ['95%'], []);

    const [loading, setLoading] = React.useState(false);


    React.useEffect(() => {
        if (isVisible) {
            bottomSheetRef.current?.present();
        } else {
            bottomSheetRef.current?.dismiss();
        }
    }, [isVisible]);

    const handleFavoritePress = async () => {
        if (!instrument) return;
        setLoading(true);
        toggleFavorite(instrument.id);
        setTimeout(() => setLoading(false), 300);
    };

    const handleRemoveFromWatchlist = () => {
        if (!instrument) return;
        removeFromWatchlist(instrument.id);
        onClose();
    };

    const handleDismiss = React.useCallback(() => {
        bottomSheetRef.current?.dismiss();
        onClose();
    }, []);

    const animationConfigs = useBottomSheetSpringConfigs({
        damping: 80,
        overshootClamping: true,
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
        stiffness: 500,
    })

    if (!instrument) return null;

    const isPositive = instrument.change >= 0;
    const changeColor = isPositive ? colors.positive : colors.negative;
    const iconHeader = instrument.isFavorite ? colors.star : colors.textSecondary


    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            animationConfigs={animationConfigs}
            animateOnMount={true}
            enableDynamicSizing={false}
            enablePanDownToClose={false}
            backgroundStyle={styles.bottomSheetBackground}
            handleIndicatorStyle={styles.handleIndicator}
            onDismiss={handleDismiss}
        >
            <BottomSheetScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <HeaderDetail
                    handleFavoritePress={handleFavoritePress}
                    loading={loading}
                    handleClose={handleDismiss}
                    iconName={instrument.isFavorite ? "star" : "star-outline"}
                    iconColor={iconHeader}
                />
                <View style={styles.instrumentHeader}>
                    <SymbolSection instrument={instrument} />
                    <PriceSection
                        instrument={instrument}
                        isPositive={isPositive}
                        changeColor={changeColor}
                    />
                </View>
                <ChartDetail instrument={instrument} />
                <StatsSection instrument={instrument} />
                <ActionDetail
                    handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                    handleCancel={handleDismiss}
                    isFavorite={instrument.isFavorite}
                />
            </BottomSheetScrollView>
        </BottomSheetModal>
    )
}