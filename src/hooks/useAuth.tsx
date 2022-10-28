import { APIKey } from 'data'
import {
  ChangePasswordResponse,
  NameResponse,
  RegisterSuccessResponse,
  SignInSuccessResponse,
  SignRequest,
  UserInfoRequest
} from 'interfaces'
import { authSlice, RootState, uiSlice, userSlice } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const dispatch = useDispatch()
  const { token, localId } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const signUp = async (signRequest: SignRequest, userInfoRequest: UserInfoRequest) => {
    dispatch(uiSlice.actions.setLoading(true))
    try {
      const signUpResponse: AxiosResponse<RegisterSuccessResponse> = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKey}`,
        signRequest,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const userInfoResponse: AxiosResponse<NameResponse> = await axios.post(
        `https://login-app-ff7d8-default-rtdb.firebaseio.com/users/${signUpResponse.data.localId}.json?auth=${signUpResponse.data.idToken}`,
        userInfoRequest,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(signUpResponse)
      console.log(userInfoResponse)
      dispatch(
        uiSlice.actions.showModal({
          open: true,
          title: 'Success',
          description: 'You have been registered',
          error: false
        })
      )
      dispatch(uiSlice.actions.setLoading(false))
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        console.log(e)
        dispatch(
          uiSlice.actions.showModal({
            open: true,
            title: 'Error',
            description: e.message,
            error: true
          })
        )
        dispatch(uiSlice.actions.setLoading(false))
      }
    }
  }

  const signIn = async (signRequest: SignRequest) => {
    dispatch(uiSlice.actions.setLoading(true))
    try {
      const signInResponse: AxiosResponse<SignInSuccessResponse> = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKey}`,
        signRequest,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(signInResponse)
      dispatch(
        authSlice.actions.setAuthInfo({
          auth: true,
          localId: signInResponse.data.localId,
          token: signInResponse.data.idToken
        })
      )
      navigate('/profile')
      dispatch(uiSlice.actions.setLoading(false))
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        dispatch(uiSlice.actions.setLoading(false))
        dispatch(
          uiSlice.actions.showModal({
            open: true,
            title: 'Error',
            description: e.message,
            error: true
          })
        )
        console.log(e)
      }
    }
  }

  const getUserInfo = async () => {
    dispatch(uiSlice.actions.setLoading(true))
    try {
      const response = await axios.get(
        `https://login-app-ff7d8-default-rtdb.firebaseio.com/users/${localId}.json?auth=${token}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const auxName = Object.keys(response.data)[0]
      dispatch(authSlice.actions.setName(auxName))
      const userResponse = await axios.get(
        `https://login-app-ff7d8-default-rtdb.firebaseio.com/users/${localId}/${auxName}.json?auth=${token}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(userResponse.data)
      dispatch(
        userSlice.actions.setUserInfo({
          firstName: userResponse.data.firstName,
          lastName: userResponse.data.lastName,
          position: userResponse.data.position,
          avatar: `https://ui-avatars.com/api/?name=${userResponse.data.firstName}`,
          skills: userResponse.data.skills
        })
      )
      dispatch(uiSlice.actions.setLoading(false))
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        dispatch(uiSlice.actions.setLoading(false))
        dispatch(
          uiSlice.actions.showModal({
            open: true,
            title: 'Error',
            description: e.message,
            error: true
          })
        )
        console.log(e)
      }
    }
  }

  const changePassword = async (password: string) => {
    dispatch(uiSlice.actions.setLoading(true))
    try {
      const changePasswordResponse: AxiosResponse<ChangePasswordResponse> = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${APIKey}`,
        {
          idToken: token,
          password: password,
          returnSecureToken: true
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(changePasswordResponse)
      dispatch(
        uiSlice.actions.showModal({
          open: true,
          title: 'Success',
          description: 'Password changed successfully',
          error: false
        })
      )
      dispatch(uiSlice.actions.setLoading(false))
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        dispatch(uiSlice.actions.setLoading(false))
        dispatch(
          uiSlice.actions.showModal({
            open: true,
            title: 'Error',
            description: e.message,
            error: true
          })
        )
        console.log(e)
      }
    }
  }

  return {
    signUp,
    signIn,
    getUserInfo,
    changePassword
  }
}
