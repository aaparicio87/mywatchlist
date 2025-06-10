import React from 'react';
import { View, Dimensions } from 'react-native'
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { Instrument } from '@/reducers/watchList';
import { useGlobalStyles } from '@/hooks/useGlobalStyled';

import { HeaderDetail, PriceSection, SymbolSection } from './components';
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

    const [loading, setLoading] = React.useState(false);
    const bottomSheetRef = React.useRef<BottomSheet>(null);

    // Bottom sheet snap points
    const snapPoints = React.useMemo(() => ['25%', '50%', '90%'], []);

    // Handle sheet changes
    const handleSheetChanges = React.useCallback((index: number) => {
        if (index === -1) {
            onClose();
        }
    }, [onClose]);

    React.useEffect(() => {
        if (isVisible && instrument) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [isVisible, instrument]);

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

    const handleClose = () => {
        bottomSheetRef.current?.close();
    };

    if (!instrument) return null;

    const isPositive = instrument.change >= 0;
    const changeColor = isPositive ? colors.positive : colors.negative;

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            backgroundStyle={styles.bottomSheetBackground}
            handleIndicatorStyle={styles.handleIndicator}
        >
            <BottomSheetView style={styles.contentContainer}>
                <HeaderDetail
                    handleFavoritePress={handleFavoritePress}
                    loading={loading}
                    handleClose={handleClose}
                    iconName={instrument.isFavorite ? "star" : "star-outline"}
                    iconColor={instrument.isFavorite ? colors.star : colors.textSecondary}
                />
                <BottomSheetScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.instrumentHeader}>
                        <SymbolSection instrument={instrument} />
                        <PriceSection
                            instrument={instrument}
                            isPositive={isPositive}
                            changeColor={changeColor}
                        />
                    </View>
                </BottomSheetScrollView>
            </BottomSheetView>
        </BottomSheet>
    )
}